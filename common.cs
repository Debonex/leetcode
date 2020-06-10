using System;
using System.Collections;
using System.Collections.Generic;
namespace Common{
    public class Output<T>{
        public void printList(IList list){
            Console.Write("[");
            for(int i=0;i<list.Count;i++){
                Console.Write(list[i]+(i==list.Count-1?"":","));
            }
            Console.Write("]");
            Console.WriteLine();
        }
    }
}