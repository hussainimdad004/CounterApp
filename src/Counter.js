import React from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { incrementCount } from "./Redux/actions/ActionIncrement";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    increment = () => {

        this.setState({
            counter: this.state.counter + 1
        })
        this.props.incrementCount(this.props.r_inc + 1)
    }
    decrement = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
            if (this.props.r_inc > 0) {
                this.props.incrementCount(this.props.r_inc - 1)
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.counter}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.decrementButton} onPress={() => { this.decrement() }}>
                        <Text>-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.incrementButton} onPress={() => { this.increment() }}><Text>+</Text></TouchableOpacity>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    incrementButton: {
        backgroundColor: 'blue',
        width: '20%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    decrementButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        width: '20%',
        justifyContent: 'center',
        height: '30%'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '40%'
    }
})
const mapStateToProps = (state, own_props) => {

    const { Increment } = state;
    console.log('Increment', Increment)
    return {
        r_inc: Increment.increment
    }
}
const actions = {
    incrementCount
}
export default connect(mapStateToProps, actions)(Counter);
