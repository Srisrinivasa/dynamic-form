import React from "react";
import { DynamicForm } from "features/DynamicForm";

export class App extends React.Component {
    state = {
        form1: {
            inputs: [
                { id: "firstName", type: "text", label: "First name" },
                { id: "phoneNumber", type: "number", label: "Phone number" },
                { id: "gender", type: "radio", options: ["Male", "Female"], label: "Gender", value: "Male" },
                { id: "tnc", type: "checkbox", label: "Terms & conditions" },
            ]
        },
        form2: {
            inputs: [
                { id: "resume", type: "File", label: "Upload file" }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    Dynamic forms
                </header>
                <DynamicForm
                    formName="Form 1"
                    formData={this.state.form1} />
                <DynamicForm
                    formName="Form 2"
                    formData={this.state.form2} />
            </div>
        );
    }
}   