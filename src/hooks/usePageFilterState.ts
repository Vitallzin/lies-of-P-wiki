import { useState } from 'react';

interface PageFilterState {
  searchTerm: string;
  filters: string[];
}

const pageFilterState = new Map<string, PageFilterState>();

export const usePageFilterState = (pageKey: string) => {
  const initialState = pageFilterState.get(pageKey) ?? {
    searchTerm: '',
    filters: ['all'],
  };

  const [searchTermState, setSearchTermState] = useState(initialState.searchTerm);
  const [filtersState, setFiltersState] = useState(initialState.filters);

  const getCurrentState = () => pageFilterState.get(pageKey) ?? initialState;

  const setSearchTerm = (searchTerm: string) => {
    pageFilterState.set(pageKey, {
      ...getCurrentState(),
      searchTerm,
    });
    setSearchTermState(searchTerm);
  };

  const setFilters = (filters: string[]) => {
    pageFilterState.set(pageKey, {
      ...getCurrentState(),
      filters,
    });
    setFiltersState(filters);
  };

  return {
    searchTerm: searchTermState,
    setSearchTerm,
    filters: filtersState,
    setFilters,
  };
};
