import { IMatrix } from './ExampleData.interface';

export class ExampleData {

  static matrixExampleDest() {
    return [{
      type: 'currency',
      typeValue: 'USD',
      data: [{
        type: 'type',
        typeValue: 'Treasury',
        data: [{
          type: 'duration',
          typeValue: '3m',
          value: [{
            key: 'Jan, 2017',
            value: { value: 123, name: 'USD, Treasury, 3m, Jan 17 - 123' }
          }, {
            key: 'Feb, 2017',
            value: { value: 234, name: 'USD, Treasury, 3m, Feb 17 - 234' }
          }]
        }, {
          type: 'duration',
          typeValue: '5y',
          value: [{
            key: 'Jan, 2017',
            value: { value: 456, name: 'USD, Treasury, 5y, Jan 17 - 456' }
          }, {
            key: 'Feb, 2017',
            value: { value: 567, name: 'USD, Treasury, 5y, Feb 17 - 567' }
          }]
        }]
      }, {
        type: 'type',
        typeValue: 'Type 2',
        data: [{
          type: 'duration',
          typeValue: '3m',
          value: [{
            key: 'Jan, 2017',
            value: { value: 321, name: 'USD, Type 2, 3m, Jan 17 - 321' }
          }, {
            key: 'Feb, 2017',
            value: { value: 432, name: 'USD, Type 2, 3m, Feb 17 - 432' }
          }]
        }, {
          type: 'duration',
          typeValue: '5y',
          value: [{
            key: 'Jan, 2017',
            value: { value: 543, name: 'USD, Type 2, 5y, Jan 17 - 543' }
          }, {
            key: 'Feb, 2017',
            value: { value: 654, name: 'USD, Type 2, 5y, Feb 17 - 654' }
          }]
        }]
      }]
    }, {
      type: 'currency',
      typeValue: 'CHF',
      data: [{
        type: 'type',
        typeValue: 'Treasury',
        data: [{
          type: 'duration',
          typeValue: '3m',
          value: [{
            key: 'Jan, 2017',
            value: { value: 987, name: 'CHF, Treasury, 3m, Jan 17 - 987' }
          }, {
            key: 'Feb, 2017',
            value: { value: 876, name: 'CHF, Treasury, 3m, Feb 17 - 234' }
          }]
        }, {
          type: 'duration',
          typeValue: '5y',
          value: [{
            key: 'Jan, 2017',
            value: { value: 876, name: 'CHF, Treasury, 5y, Jan 17 - 876' }
          }, {
            key: 'Feb, 2017',
            value: { value: 765, name: 'CHF, Treasury, 5y, Feb 17 - 765' }
          }]
        }]
      }, {
        type: 'type',
        typeValue: 'Type 2',
        data: [{
          type: 'duration',
          typeValue: '3m',
          value: [{
            key: 'Jan, 2017',
            value: { value: 654, name: 'CHF, Type 2, 3m, Jan 17 - 654' }
          }, {
            key: 'Feb, 2017',
            value: { value: 543, name: 'CHF, Type 2, 3m, Feb 17 - 543' }
          }]
        }, {
          type: 'duration',
          typeValue: '5y',
          value: [{
            key: 'Jan, 2017',
            value: { value: 324, name: 'CHF, Type 2, 5y, Jan 17 - 324' }
          }, {
            key: 'Feb, 2017',
            value: { value: 142, name: 'CHF, Type 2, 5y, Feb 17 - 142' }
          }]
        }]
      }]
    }];
  }

  // .map(ml1 => {
  //     return {
  //       type: Object.keys(ml1)[0],
  //       typeValue: ml1[Object.keys(ml1)[0]],
  //       data: this.getData(ml1)
  //     };
  //   })

  static getData(ml2) {
    return ml2.data.map(ml3 => {
      if (Object.keys(ml3)[0] !== 'duration') {  // need a better condition here
        return {
          type: Object.keys(ml3)[0],
          typeValue: ml3[Object.keys(ml3)[0]],
          data: this.getData(ml3)
        };
      }
      return {
        type: Object.keys(ml3)[0],
        typeValue: ml3[Object.keys(ml3)[0]],
        value: ml3.data.map(ml4 => {
          return {
            key: ml4.date,
            value: {
              value: ml4.value.value,
              name: `audit`
            }
          };
        })
      };
    });
  }

  static matrixExampleSource() {
    return [
      {
        currency: 'USD',
        data: [{
          type: 'Treasury', data: [{
            duration: '3m',
            data: [{
              date: 'Jan, 2017',
              value: { value: 123, name: 'USD, Treasury, 3m, Jan 17 - 123' }
            }, {
              date: 'Feb, 2017',
              value: { value: 234, name: 'USD, Treasury, 3m, Feb 17 - 234' }
            }]
          }, {
            duration: '5y',
            data: [{
              date: 'Jan, 2017',
              value: { value: 456, name: 'USD, Treasury, 5y, Jan 17 - 456' }
            }, {
              date: 'Feb, 2017',
              value: { value: 567, name: 'USD, Treasury, 5y, Feb 17 - 567' }
            }]
          }]
        }, {
          type: 'Type 2', data: [{
            duration: '3m',
            data: [{
              date: 'Jan, 2017',
              value: { value: 321, name: 'USD, Type 2, 3m, Jan 17 - 321' }
            }, {
              date: 'Feb, 2017',
              value: { value: 432, name: 'USD, Type 2, 3m, Feb 17 - 432' }
            }]
          }, {
            duration: '5y',
            data: [{
              date: 'Jan, 2017',
              value: { value: 543, name: 'USD, Type 2, 5y, Jan 17 - 543' }
            }, {
              date: 'Feb, 2017',
              value: { value: 654, name: 'USD, Type 2, 5y, Feb 17 - 654' }
            }]
          }]
        }]
      }, {
        currency: 'CHF',
        data: [{
          type: 'Treasury', data: [{
            duration: '3m',
            data: [{
              date: 'Jan, 2017',
              value: { value: 987, name: 'CHF, Treasury, 3m, Jan 17 - 987' }
            }, {
              date: 'Feb, 2017',
              value: { value: 876, name: 'CHF, Treasury, 3m, Feb 17 - 234' }
            }]
          }, {
            duration: '5y',
            data: [{
              date: 'Jan, 2017',
              value: { value: 876, name: 'CHF, Treasury, 5y, Jan 17 - 876' }
            }, {
              date: 'Feb, 2017',
              value: { value: 765, name: 'CHF, Treasury, 5y, Feb 17 - 765' }
            }]
          }]
        }, {
          type: 'Type 2', data: [{
            duration: '3m',
            data: [{
              date: 'Jan, 2017',
              value: { value: 654, name: 'CHF, Type 2, 3m, Jan 17 - 654' }
            }, {
              date: 'Feb, 2017',
              value: { value: 543, name: 'CHF, Type 2, 3m, Feb 17 - 543' }
            }]
          }, {
            duration: '5y',
            data: [{
              date: 'Jan, 2017',
              value: { value: 324, name: 'CHF, Type 2, 5y, Jan 17 - 324' }
            }, {
              date: 'Feb, 2017',
              value: { value: 142, name: 'CHF, Type 2, 5y, Feb 17 - 142' }
            }]
          }]
        }]
      }
    ].map(ml1 => {
      return {
        type: Object.keys(ml1)[0],
        typeValue: ml1[Object.keys(ml1)[0]],
        data: this.getData(ml1)
      };
    });
  }
}
