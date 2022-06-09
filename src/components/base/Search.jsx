const Search = () => {
      return(
            <>
                  <div className="searchBox">
                        <div className="searchIcon">
                              <svg aria-label="검색" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
                        </div>
                        <input type="text" placeholder="검색"/>
                  </div>
            </>
      )
}

export default Search;