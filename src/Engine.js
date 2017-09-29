"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImmediateValue_1 = require("./expression/ImmediateValue");
const CallOperator_1 = require("./expression/CallOperator");
const AddOperator_1 = require("./operator/AddOperator");
const EqualOperator_1 = require("./operator/EqualOperator");
const GetOperator_1 = require("./operator/GetOperator");
const MultiplyOperator_1 = require("./operator/MultiplyOperator");
const SetOperator_1 = require("./operator/SetOperator");
const StepOperator_1 = require("./operator/StepOperator");
const UntilOperator_1 = require("./operator/UntilOperator");
const IfOperator_1 = require("./operator/IfOperator");
class Engine {
    constructor() {
        this.operators = {};
        this.variables = {};
        this.operators['+'] = new AddOperator_1.AddOperator();
        this.operators['*'] = new MultiplyOperator_1.MultiplyOperator();
        this.operators['='] = new EqualOperator_1.EqualOperator();
        this.operators['set'] = new SetOperator_1.SetOperator();
        this.operators['get'] = new GetOperator_1.GetOperator();
        this.operators['until'] = new UntilOperator_1.UntilOperator();
        this.operators['step'] = new StepOperator_1.StepOperator();
        this.operators['if'] = new IfOperator_1.IfOperator();
    }
    eval(script) {
        return this.getExpression(script).eval(this);
    }
    getExpression(script) {
        if (script instanceof Array) {
            let scriptArray = script;
            return new CallOperator_1.CallOperator(this.operators[scriptArray[0]], scriptArray.slice(1));
        }
        else {
            return new ImmediateValue_1.ImmediateValue(script);
        }
    }
}
exports.Engine = Engine;