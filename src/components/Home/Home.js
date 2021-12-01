import React, { Component } from "react";
import Select from 'react-select';
import AsyncSelect from 'react-async-select';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOption: "",
      runners: [],
      event_name: [],
      uniq_event: [],
      name: "",
      bib_number: 0,

    };
  }

  async handleSearch() {
    fetch("http://localhost:3001")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json().then((data) => {
          const options = data.map((x) => ({ label: x.event_name }));
          const uniqueOptions = [...new Set(options)];
          console.log(uniqueOptions);
          // const options2 = options.filter((item,index) => array(indexOf(item) === index));
          const unique = [...new Set(data.map((item) => item.event_name))];
          const uniq = options;
  
          // console.log(options.filter(x=> x.event_name))
          // console.log(data.map(x => x.bib_number));
          // const options = data.map(d => ({

          //   "label" :  d.event_name,
          //   "value" : d.event_name
          // }))

          const u = this.getUnique(options, "label")
          console.log(u);

          this.setState({ event_name: u });
          // console.log(this.state.event_name[0])
          this.setState({ uniq_event: this.state.event_name });
          // console.log(this.state.uniq_event)
          // this.setState({event_name: data.map(x=>x.event_name)})
          // console.log(this.state.event_name)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.handleSearch();
  }
  getUnique(arr, comp) {
    // store the comparison  values in array
    const unique = arr
      .map((e) => e[comp])
      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  render() {
    const { runners, searchOption, event_name, aquaticCreatures, uniq_event } =
      this.state;

    return (
      <>
        <div className="container-fluid">
          <div className = "select-container">
            <h3> Select an Event</h3>
              <Select
                options={event_name}
                // onChange={(option) => console.log(option.label, option.value)}
                onChange={(opt) => window.location.assign("/bib")}
                defaultOptions={false}
              />
          </div>
        </div>
      </>
    );
  }
}
export default Home;









// // FOR AsyncSelect 

// handleSearch = (inputValue, callback) => {
//   if (!inputValue) {
//     callback([]);
//   } else {
//     setTimeout(() => {
//       fetch("http://localhost:3001", {
//         method: "GET",
//       })
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           console.log(data);
//           const tempArray = [];
//           data.forEach((element) => {
//             tempArray.push({
//               label: element.event_name,
//               value: element.bib_number,
              
//             });
//           });
//           callback(tempArray);
//         })
//         .catch((error) => {
//           console.log(error, "fetch error");
//         });
//     });
//   }
// };

// searchOption = (selectedOption) => {
//   if (selectedOption) {
//     this.setState({
//       selectedOption,
//     });
//   }
//   window.location.assign("/bib")
// };


// <div>
//            <AsyncSelect
//                 value={this.state.selectedOption}
//                 loadOptions={this.searchOption}
//                 onChange={(e) => {
//                     this.searchOption(e);
//                 }}
//                 defaultOptions={false}
//                 />
//       </div>

      


