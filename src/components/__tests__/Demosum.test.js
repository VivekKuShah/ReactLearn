import { sum } from "../Demosumtest";

test("NameOfText", function (){
  expect(sum(10,20)).toBe(30); 
})

// need not to import test (jest automatically undertsnad)