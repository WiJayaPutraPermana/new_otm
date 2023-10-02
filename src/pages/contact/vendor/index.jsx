import React from 'react'
import { connect } from 'react-redux'

export const index = (props) => {
  return (
    <div>Vendor</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)
