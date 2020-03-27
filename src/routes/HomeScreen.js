import React, { Component } from 'react';
import TransactionStats from '../containers/transaction/TransactionStats';
import SectionHeader from '../components/section-header';

class HomeScreen extends Component {
  
    render() {
            return  (
                <div>
                <SectionHeader/>
                <div className="m-5">
                  <TransactionStats />
                </div>
                <div className="m-5">
                </div>
              </div>
            );
        }
  }
  
  export default HomeScreen;
