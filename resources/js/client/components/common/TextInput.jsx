import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextInput = ({
    name,
    label,
    type,
    placeholder,
    value,
    onChange,
    error,
    info,
    disabled
}) => {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <input
                type={type}
                className={classnames("form-control form-control-md", {
                    "is-invalid": error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <small className="invalid-feedback">{error}</small>}
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    info: PropTypes.string,
    disabled: PropTypes.bool
};

export default TextInput;
