let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    decimalButton = document.getElementById('decimal'),
    resultButton = document.getElementById('result'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.outerText);
    });
        
};

for (let i = 0; i < operations.length; i++) {
    let operationButton = operations[i];
    operationButton.addEventListener('click', function(e) {
        operation(e.target.outerText);
    });
       
};

for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e) {
        clear(e.srcElement.id)
    });      
};

decimalButton.addEventListener('click', decimal);

resultButton.addEventListener('click', result);





    function numberPress(number) {
        if (MemoryNewNumber) {
            display.value = number;
            MemoryNewNumber = false;
        } else {
            if (display.value === '0') {
                display.value = number;
            } else {
                display.value += number;
            };
        };

    };

    function operation (op) {
        let localOperationMemory =  display.value;

        if (MemoryNewNumber && MemoryPendingOperation !== '=') {
            display.value = MemoryCurrentNumber;
        } else {
            MemoryNewNumber = true;
            if (MemoryPendingOperation === '+') {
                MemoryCurrentNumber +=  Number(localOperationMemory);
            } else if (MemoryPendingOperation === '-') {
                MemoryCurrentNumber -=  Number(localOperationMemory);
            } else if (MemoryPendingOperation === '*') {
                MemoryCurrentNumber *=  Number(localOperationMemory);
            } else if (MemoryPendingOperation === '/') {
                MemoryCurrentNumber /=  Number(localOperationMemory);
            } else {
                MemoryCurrentNumber = Number(localOperationMemory);
            };
            display.value = MemoryCurrentNumber;
            MemoryPendingOperation = op;
        };
    };

    function decimal() {
        let localDecMemory = display.value;

        if (MemoryNewNumber) {
            localDecMemory = '0.';
            MemoryNewNumber = false;
        } else {
            if (localDecMemory.indexOf('.') === -1) {
                localDecMemory += '.';
            };
        };
        display.value = localDecMemory;
    };

    function clear(id) {
        if (id === 'ce') {
            display.value = '0';
            MemoryNewNumber = true;
        } else if (id === 'c') {
            display.value = '0';
            MemoryNewNumber = true;
            MemoryCurrentNumber = 0;
            MemoryPendingOperation = '';
        }


        console.log('Клик по ' + id + ' !');
    };

