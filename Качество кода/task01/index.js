function pow(x,n)  //нет пробела между аргументами
{                   // скобка перенесена на другую строку
    let result=1;   //нет пробелов вокруг знака =
    for(let i=0;i<n;i++) {result*=x;}// нет пробелов, тело цикла нужно перенести на отдельную строку
    return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
//нет пробелов, нет (;), переменные лучше обьявлять каждую отдельно и на новой строке
if (n<=0)
{            // скобка перенесена на другую строку
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else        // лучше не переносить else
{            // скобка перенесена на другую строку
    alert(pow(x,n))     //нет (;), нет пробелов между аргументами
}