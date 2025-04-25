// import { Dispatch, SetStateAction, useEffect, useState } from "react";

// export default function useClassState<T extends ClassState<T>>(
//   initialValue: T
// ) {
//   const [value, setValue] = useState<T>(initialValue);

//   useEffect(() => {
//     value.init(setValue);
//   }, []);

//   return value;
// }

// export class ClassState<T> {
//   protected setValue: Dispatch<SetStateAction<T>>;

//   constructor() {
//     this.setValue = () => {};
//   }

//   init(setValue: Dispatch<SetStateAction<T>>) {
//     this.setValue = setValue;
//   }
// }

// class Test extends ClassState<Test> {
//   test(test: Test) {
//     this.setValue(test);
//   }
// }
