import React, { Fragment } from 'react';

export class DynamicForm extends React.Component {
    state = {
        inputs: []
    }
    handleInputChange = e => {
        const { id, value, type } = e.target;
        this.setState(prev => {
            switch (type) {
                case 'checkbox':
                    return { [id]: !!!prev[id] }
                default:
                    return { [id]: value }
            }
        })
    }
    componentDidMount() {
        this.setState({
            inputs: this.props.formData.inputs
        }, () => {
            const { inputs } = this.state;
            for (let i in inputs) {
                this.setState({
                    [inputs[i].id]: inputs[i].value
                });
            }
        });
    }
    render() {
        return (
            <section className="border border-primary my-4">
                <h1>{this.props.formName}</h1>
                <form>
                    {
                        this.state.inputs.length > 0 && this.state.inputs.map((meta, key) => {
                            return (
                                <Fragment key={key}>
                                    <label htmlFor={meta.id}
                                        className="mr-2"
                                    >
                                        <strong>{meta.label.toUpperCase()}:</strong>
                                    </label>
                                    {
                                        (meta.type === "radio") ?
                                            meta.options.map((opt, i) => <Fragment key={i}>
                                                <span className="mr-1">{opt}</span>
                                                <input
                                                    {...meta}
                                                    className="mr-2"
                                                    value={opt}
                                                    checked={opt === this.state[meta.id]}
                                                    onChange={this.handleInputChange} />
                                            </Fragment>
                                            )
                                            :
                                            (meta.type === "file") ?
                                                <input {...meta} ref={React.createRef()} />
                                                :
                                                < input
                                                    {...meta}
                                                    onChange={this.handleInputChange}
                                                    value={this.state[meta.id]} />
                                    }
                                    <br />
                                </Fragment>
                            );
                        })
                    }
                </form>
            </section>);
    }

}