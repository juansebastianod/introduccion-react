import React from "react";
import { useState } from "react";

function Contador() {


    let contador1 = 10;
    let contador2 = 10;



    function mayor2() {

        if (contador2 < 0) {
              if (contador2 == -1) {

                contador2 -= 1;

                return mayor()

            } else {

                if (contador2 == -10) {
                    document.getElementById("numero2").innerHTML = contador2;
                    return  mayor3()

                }

            }

        }

        document.getElementById("numero2").innerHTML = contador2;

        contador2 -= 1;

        setTimeout(mayor2,500)
    }

    function mayor() {

        document.getElementById("numero1").innerHTML = contador1;

        contador1 -= 1;
        if (contador1 < 0) {


            if (contador1 == -1) {

               return mayor2()

            } else {


                if (contador1 == -10) {
                    document.getElementById("numero1").innerHTML = contador1;
                    return mayor2();

                }

            }



        }

        setTimeout(mayor, 500)



    }


    function mayor3(){



        
    }







    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div id="numero1">10</div>
                <div id="numero2">10</div>
            </div>
            <button onClick={mayor} style={{ display: "flex", justifyContent: "center" }}>contar</button>
        </>
    );
}

export default Contador;
