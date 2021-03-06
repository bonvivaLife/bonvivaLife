import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Overview from '../Overview'
import Detail from '../Detail'
import {fetchContracts, resetData} from '../../actions/data'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {GlobalWrapper, ResetButton} from './style'

class App extends React.Component {

  componentDidMount () {
    this.refreshTimer = window.setTimeout(this.refreshData, 0)
  }

  componentWillUnmount () {
    window.clearInterval(this.refreshTimer)
  }

  refreshData = () => {
    console.log('...refreshing contracts')
    this.props.fetchContracts()
  }

  render () {
    return (
      <GlobalWrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/overview" component={Overview} />
        <Route path="/detail/:id" component={Detail} />
        <ResetButton onClick={this.props.resetData}>RESET</ResetButton>
      </GlobalWrapper>
    )
  }
}
  


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  fetchContracts: () => dispatch(fetchContracts()),
  resetData: () => dispatch(resetData())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
