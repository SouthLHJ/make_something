import React, { useState } from "react";

import SelectDatePicker from "Operator/Commons/Modules/DatePickerCustom";

/**
 *
 * @param {string} type date / search  defalut [ form_select ]
 * @returns
 */
const Select = ({
  data,
  setSelectData = () => {},
  selectData,
  defaultState,
  handleChangeSelect = () => {},
  type,

  // date 용도 useForm
  registerRef = false,
  name = "",
  errors,
}) => {
  const [selectOpen, setSelectOpen] = useState(false);
  switch (type) {
    case "date":
      return (
        <div className="filter_form">
          <SelectDatePicker
            onChange={handleChangeSelect}
            value={selectData}
            setSelectData={setSelectData}
            defaultState={defaultState}
            registerRef={registerRef}
            name={name}
            errors={errors}
          />
        </div>
      );

    case "search":
      return (
        <div className="filter_form">
          <button
            type="button"
            className="search_select"
            onClick={() => {
              setSelectOpen(!selectOpen);
            }}
          >
            <span>{selectData}</span>
            <img src="/assets/images/admin/sort_icon.svg" alt="" />
          </button>
          {selectOpen === true && (
            <ul className="optionListWrapper" onChange={handleChangeSelect}>
              <li
                value={defaultState}
                key={defaultState}
                onClick={() => {
                  setSelectData(defaultState);
                  setSelectOpen(false);
                }}
              >
                {defaultState}
              </li>
              {!_.isEmpty(data) &&
                data.map((item, idx) => {
                  return (
                    <>
                      <li
                        value={item}
                        key={item}
                        onClick={() => {
                          setSelectData(item);
                          setSelectOpen(false);
                        }}
                      >
                        {item}
                      </li>
                    </>
                  );
                })}
            </ul>
          )}
        </div>
      );

    default:
      return (
        <div className="filter_form">
          <button
            type="button"
            className="form_select"
            onClick={() => {
              setSelectOpen(!selectOpen);
            }}
          >
            <span>{selectData}</span>
            <img src="/assets/images/admin/thin_gray_down_arrow.svg" alt="" />
          </button>
          {selectOpen === true && (
            <ul className="optionListWrapper" onChange={handleChangeSelect}>
              <li
                value={defaultState}
                key={defaultState}
                onClick={() => {
                  setSelectData(defaultState);
                  setSelectOpen(false);
                }}
              >
                {defaultState}
              </li>
              {!_.isEmpty(data) &&
                data.map((item, idx) => {
                  return (
                    <>
                      <li
                        value={item}
                        key={item}
                        onClick={() => {
                          setSelectData(item);
                          setSelectOpen(false);
                        }}
                      >
                        {item}
                      </li>
                    </>
                  );
                })}
            </ul>
          )}
        </div>
      );
  }
};

export default Select;

const Example = () => {
  switch (type) {
    case "date":
      return (
        <Select
          type={"date"}
          handleChangeSelect={handleStartChange}
          // useState() 이용
          // setSelectData={setStartDate}
          // selectData={startDate}

          // useForm 이용
          name="survey_startdate"
          registerRef={register(defaultRule)}
          errors={_.get(errors, "survey_startdate")}
        />
      );
    case "search":
      return (
        <Select
          type={"search"}
          defaultState={"기간"}
          handleChangeSelect={handleChangePeriod}
          setSelectData={setClickState}
          selectData={clickState}
          data={["1주일", "1개월", "3개월"]}
        />
      );
    default:
      return (
        <Select
          type={""}
          defaultState={""}
          handleChangeSelect={handleChangeType}
          setSelectData={setEmailType}
          selectData={emailType}
          data={email_type.map((elm) => elm.value)}
        />
      );
  }
};
