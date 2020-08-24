import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'


class HashValues extends Component {

  renderHeaderRow = () => {
    const ths = []
    for (let i = 1; i <= this.props.numHashFunctions; i++) {
      ths.push(<th key={i}>Hash {i}</th>)
    }
    return ths
  }

  renderEmptyCells = () => {
    const tds = []
    for (let i = 1; i <= this.props.numHashFunctions; i++) {
      tds.push(<td key={i}>None</td>)
    }
    return tds
  }

  renderValues = () => {
    return this.props.values.map( (value, i) => <td key={i}>{value}</td> )
  }

  render() {
    return (
      <Table bordered size="sm" className="text-center">
        <thead>
          <tr>
            {this.renderHeaderRow()}
          </tr>
        </thead>
        <tbody>
          <tr>
            { this.props.values ? this.renderValues() : this.renderEmptyCells() }
          </tr>
        </tbody>
      </Table>
    )
  }
}


const mapStateToProps = state => {
  return {
    numHashFunctions: state.filter.numHashFunctions
  }
}


export default connect(mapStateToProps)(HashValues)
