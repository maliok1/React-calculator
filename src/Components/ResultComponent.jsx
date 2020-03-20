import React from 'react';
export default class ResultComponent extends React.Component{
  render() {
    let {result} = this.props;
    return (
        <div className="result">
            <p>{result}</p>
        </div>
)
    ;
}
}