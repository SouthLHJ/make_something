import {create} from "zustand";

import { createWithEqualityFn } from 'zustand/traditional'
import {FieldValues, UseFormGetValues, UseFormHandleSubmit, UseFormRegister, UseFormSetFocus, UseFormSetValue, UseFormWatch, useForm} from 'react-hook-form';
// import { useDispatch, useSelector } from "react-redux";


interface CountState {
  counts: number;
  increaseCount: () => void;
}


export const useCountStore = create<CountState>(set => ({
    counts: 0,
    increaseCount: () => set(state => ({ counts: state.counts + 1 })),
}));





interface InitData{
    user : {},
    isMobile : boolean,
    setIsMobile : ()=>void
}

interface XcellData{
    register: UseFormRegister<FieldValues>|null;
    setValue: UseFormSetValue<FieldValues>|null; 
    getValues: UseFormGetValues<FieldValues>|null; 
    watch: UseFormWatch<FieldValues>|null; 
    setRegister : (register : UseFormRegister<FieldValues>)=> void;
    setGetValues : (getValues : UseFormGetValues<FieldValues>)=> void;
    setSetValue : (setValue : UseFormSetValue<FieldValues>)=> void;
    setWatch : (watch : UseFormWatch<FieldValues>)=> void;
}

export const useInitStore = createWithEqualityFn<InitData>(set => ({
    user : {},
    isMobile : window.innerWidth <= 1300,
    setIsMobile : ()=> set(state => ({isMobile : window.innerWidth <= 1300})),
    }),
    Object.is
)
export const useXcellStore = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useSchedule1Store = createWithEqualityFn<XcellData>(set => ({
  register : null,
  getValues :null,
  setValue :null,
  watch :null,
  setRegister : (register)=>set(() =>({register : register})),
  setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
  setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
  setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useSchedule2Store = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useSchedule3Store = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useScheduleAStore = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useScheduleBStore = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useScheduleCStore = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useScheduleDStore = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useScheduleEStore = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useScheduleFStore = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useScheduleSEStore = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useSchedule8949Store = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useSchedule8995Store = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);

export const useSchedule8582Store = createWithEqualityFn<XcellData>(set => ({
    register : null,
    getValues :null,
    setValue :null,
    watch :null,
    setRegister : (register)=>set(() =>({register : register})),
    setGetValues : ( getValues,)=>set(() =>({getValues : getValues})),
    setSetValue : ( setValue,)=>set(() =>({setValue : setValue})),
    setWatch : ( watch)=>set(() =>({watch : watch})),
  }),
  Object.is
);



const XcellZustand = ()=>{
  const user= { email : 'sopi@obenef.com'};

  const { register, setValue, getValues, watch, setFocus } = useForm({});  
  const { register : registerS1, setValue : setValueS1, getValues : getValuesS1, watch : watchS1 } = useForm({});  
  const { register : registerS2, setValue : setValueS2, getValues : getValuesS2, watch : watchS2 } = useForm({});  
  const { register : registerS3, setValue : setValueS3, getValues : getValuesS3, watch : watchS3 } = useForm({});  
  const { register : registerSA, setValue : setValueSA, getValues : getValuesSA, watch : watchSA } = useForm({});  
  const { register : registerSB, setValue : setValueSB, getValues : getValuesSB, watch : watchSB } = useForm({});  
  const { register : registerSC, setValue : setValueSC, getValues : getValuesSC, watch : watchSC } = useForm({});  
  const { register : registerSD, setValue : setValueSD, getValues : getValuesSD, watch : watchSD } = useForm({});  
  const { register : registerSE, setValue : setValueSE, getValues : getValuesSE, watch : watchSE } = useForm({});  
  const { register : registerSF, setValue : setValueSF, getValues : getValuesSF, watch : watchSF } = useForm({});  
  const { register : registerSSE, setValue : setValueSSE, getValues : getValuesSSE,watch : watchSSE } = useForm({});  
  const { register : register8949, setValue : setValue8949, getValues : getValues8949,watch : watch8949 } = useForm({});  
  const { register : register8995, setValue : setValue8995, getValues : getValues8995,watch : watch8995 } = useForm({});  
  const { register : register8582, setValue : setValue8582, getValues : getValues8582,watch : watch8582 } = useForm({});  

  useInitStore.setState( state => ({ user : user}) )

  // console.log(useInitStore.getState)

  return null
}

export default XcellZustand;