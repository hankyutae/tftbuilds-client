/* eslint-disable */

<App class='App'>
  <Nav></Nav>
  <Main>
    <Switch>
      <Route path='/create-build'>
        <Building-Page class='create-builds-page'>
          <CurrentBuild class='current-build-display'> //call context here, calculate synergies/final stats
            <h2>YourCurrentBuild</h2>
            <BuildSynergies class='build-display-synergies'></BuildSynergies>
            <BuildChampions class='build-display-champions'></BuildChampions>
          </CurrentBuild> 
          
          <ChampsSearch class="champs-search"> //Has state managing filters. Needs context for entire champ list, pass it filtered down to searchResults
            <ChampsSearchFilter form class='champs-search-form'></ChampsSearchFilter>
            <ChampsSearchResults class='champs-search-results'></ChampsSearchResults>
          </ChampsSearch> //will add to context currentBuild
          
        </Building-Page>
      </Route> 
    </Switch>
  </Main>
  <footer></footer>
</App>