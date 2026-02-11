class View {
    _input1;
    _addBtn;
    _result;

    constructor() {
        this._input1 = document.getElementById("input1");
        this._addBtn = document.getElementById("add-btn");
        this._result = document.getElementById("result");

        this._addBtn.addEventListener("click", () => {
            const num1 = parseFloat(this._input1.value);
            const result = this.add(num1);
            this._result.textContent = `Result: ${result}`;
        });
    }

    add(num1) {
        return num1 + 10;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const view = new View();
});