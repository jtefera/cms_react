const React = require('react');
const ReactMarkdown = require('react-markdown');

const TextareaDiv = (props) => {
    const {inputRef, parentRef, value, defaultValue, ...otherProps} = props;
    return (
        <textarea 
            ref={(node) => {
                inputRef(node);
                parentRef(node)
            }} 
            defaultValue={value}
            {...otherProps}
        />
    );
}
const PreviewDiv = (props) => {
    return (
        <ReactMarkdown source={props.value} />
    );
}

class TextareaMDPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modePreview: false,
            value: this.props.defaultValue
        }
    }

    changeModeHandler(e) {
        e.preventDefault();
        const newState = {
            modePreview: !this.state.modePreview
        };
        if (this.textareaNode) {
            newState.value = this.textareaNode.value;
        }
        this.setState(newState);
    }


    render() {
        const props = this.props;
        const state = this.state;
        const changeLinkText = (state.modePreview) ? 'Edit' : 'Preview';
        const mode = (state.modePreview) ?
                        <PreviewDiv 
                            {...props} 
                            value={state.value}
                        />
                        : <TextareaDiv 
                            {...props}
                            value={state.value} 
                            parentRef={((node) =>{this.textareaNode = node}).bind(this)}/>;

        return (
            <div>
                <a href="#" onClick={this.changeModeHandler.bind(this)}>{changeLinkText}</a>
                <div>
                    {mode}
                </div>
            </div>
        )
    }
}

module.exports = TextareaMDPreview;