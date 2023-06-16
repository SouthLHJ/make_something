import { forwardRef, useState } from "react";

/**
 *
 * <RadioGroup
 *
 *           registerRef={register(defaultRule)}
 *
 *           list={[
 *
 *               {id : 'survey_use_on', name : "survey_use", value :'true', text : '사용' },
 *
 *               {id : 'survey_use_off', name : "survey_use", value :'false', text : '미사용' },
 *
 *           ]}
 *
 *           defaultValue={_.get(data, 'survey_use')}
 *
 *           handleChange={handleChange}
 *
 *       />
 */
const RadioGroup = forwardRef(
  ({
    list,
    registerRef,
    ref,
    defaultValue = false,
    handleChange = () => {},
    labelClassName = "",
  }) => {
    const [select, setSelect] = useState(defaultValue);

    return (
      <div className="flexBox dir_row">
        {list.map((elm) => (
          <>
            <label className={labelClassName}>
              <input
                type="radio"
                id={_.get(elm, "id", _.get(elm, "value"))}
                name={_.get(elm, "name", _.get(elm, "text"))}
                ref={registerRef ?? ref}
                value={_.get(elm, "value")}
                checked={_.get(elm, "value") == select}
                onChange={(e) => {
                  handleChange(e);
                  if(e.target.value == 'true' || e.target.value == 'false'){
                    setSelect(e.target.value == 'true');
                  }else{
                    setSelect(e.target.value);
                  }
                }}
              />
              <span>{_.get(elm, "text", _.get(elm, "value"))}</span>
            </label>
          </>
        ))}
      </div>
    );
  }
);

export default RadioGroup;

const Example = () => {
  return (
    <RadioGroup
      registerRef={register(defaultRule)}
      list={[
        {
          id: "survey_use_on",
          name: "survey_use",
          value: "true",
          text: "사용",
        },
        {
          id: "survey_use_off",
          name: "survey_use",
          value: "false",
          text: "미사용",
        },
      ]}
      defaultValue={_.get(data, "survey_use")}
      handleChange={handleChange}
    />
  );
};
