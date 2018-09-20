import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './reducers/index';
console.log(actions)

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		};
	}

  componentDidMount() {
    this.setState({
      num: this.props.num_store
    })
  }

  componentWillReceiveProps(nextProps) {
    let { num_store } = nextProps;
    this.setState({
      num: num_store
    })
  }

	render() {
		const { num } = this.state;
		return (
			<div className="App">
				<button onClick={()=>{
          // console.log(this.props);
          this.props.add_num(1)
        }}> + </button>
				<span>{ num }</span>
				<button onClick={()=>{
          // console.log(this.props)
          this.props.reduceNum(1)
        }}> - </button>
        <button onClick={()=>{
          // console.log(this.props)
          this.props.asyncAdd()
        }}> 异步增加 </button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_num: function (num) {
      dispatch({
          type: actions.ADD_NUM,
          num
        })
    },
    reduceNum: function(num){
      dispatch({
          type: actions.REDUCE_NUM,
          num
        })
    },
    asyncAdd: function(num){
      dispatch({
          type: actions.ASYNC_ADD_NUM,
        })
    }
  }
};

const mapStateToProps = (state) => {
  // console.log(state,'-------mapState------')
  return {
    num_store: state.num
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(App);
