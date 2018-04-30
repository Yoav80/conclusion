import { DATA_AVAILABLE, GENDER_SELECTED, SEARCH_TERM_ENTERED, NAT_SELECTED, FILTER_DATA_SELECTED, CLEAR_FILTERS_SELECTED } from './App.actions';

const initialState = {
  loading: true,
  data: [],
  dataToDisplay: [],
  searchTerm: '',
  nationality: undefined,
  gender: undefined,
  filterData: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      const data = action.data.map( item => {
        return {
            gender: item.gender,
            nat: item.nat,
            name: `${item.name.first} ${item.name.last}`
        }
      })

      return {
        ...state,
        loading: false,
        data: data,
        dataToDisplay: data
      };

    case SEARCH_TERM_ENTERED:
      return {
        ...state,
        searchTerm: action.data
      }

    case NAT_SELECTED:
      return {
        ...state,
        nationality: action.data !== 'Select' ? action.data : undefined
      }
      
    case GENDER_SELECTED:
      return {
        ...state,
        gender: action.data !== 'Select' ? action.data : undefined
      }

    case FILTER_DATA_SELECTED:
      //const filters = getFilters(state);
      const { nationality, gender, searchTerm } = state;
      const filters = { nationality, gender, searchTerm }
      
      if (filters) {
        return {
          ...state,
          dataToDisplay: state.data.filter( item => filterItem(filters, item))
        }
      }
      return state;

    case CLEAR_FILTERS_SELECTED:
      return {
        ...state,
        searchTerm: '',
        gender: undefined,
        nationality: undefined ,
        dataToDisplay: state.data    
      }

    
    default:
      return state;
  }
};

const filterItem = (filters, item) => {
  if (filters.nationality) {
      if (item.nat !== filters.nationality){
          return false;
      } 
  }

  if (filters.gender) {
      if (item.gender !== filters.gender){
          return false;
      } 
  }

  if (filters.searchTerm) {
      if (!item.name.includes(filters.searchTerm)){
          return false;
      } 
  }
  return true;
}
