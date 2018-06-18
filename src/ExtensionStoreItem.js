'use strict'

const React = require('react')
const { PushButton } = require('brave-ui')

class ExtensionStoreItem extends React.Component {
  constructor (props) {
    super()
    this.state = {
      extensions: []
    }

    this.install = this.install.bind(this)
  }

  install () {
    console.log('install for ' + this.props.name + ' clicked')
  }

  render () {
    const rootStyle = {
      display: 'inline-block',
      marginTop: '10px',
      marginRight: '10px',
      border: '1px solid black',
      minWidth: '150px',
      minHeight: '60px',
      textAlign: 'center'
    }

    return <div style={rootStyle}>
      <div>{this.props.name}</div>
      <div>Version {this.props.version}</div>
      <PushButton onClick={this.install}>Install</PushButton>
    </div>
  }
}

module.exports = ExtensionStoreItem