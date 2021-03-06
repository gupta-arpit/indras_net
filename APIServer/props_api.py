import json

from APIServer.api_utils import json_converter, err_return
from APIServer.models_api import get_model
from registry.execution_registry import execution_registry, EXEC_KEY
from registry.registry import get_env
from registry.run_dict import setup_dict

ENV_INSTANCE = 0


def get_props_for_current_execution(model_id, indra_dir):
    try:
        execution_key = execution_registry.create_new_execution_registry()
        model = get_model(model_id, indra_dir=indra_dir)
        with open(indra_dir + "/" + model["props"]) as file:
            props = json.loads(file.read())
        execution_registry.set_propargs(execution_key, props)
        props[EXEC_KEY] = \
            execution_registry.get_execution_key_as_prop(execution_key)
        return props
    except (IndexError, KeyError, ValueError):
        return err_return("Invalid model id " + str(model_id))
    except FileNotFoundError:  # noqa: F821
        return err_return("Models or props file not found")


def put_props(model_id, payload, indra_dir):
    execution_key = payload[EXEC_KEY].get("val")
    model = get_model(model_id, indra_dir=indra_dir)
    setup_dict[model["run"]](props=payload)
    return json_converter(
        get_env(execution_key=execution_key), execution_key=execution_key)
