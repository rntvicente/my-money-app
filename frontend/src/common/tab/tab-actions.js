export function selectTab(tabId) {
  return {
    type: 'TAB_SELETED',
    payload: tabId
  }
}

export function showTabs(...tabIds) {
  const tabsToShow = {};

  tabIds.forEach(item => tabsToShow[item] = true);

  return{
    type: 'TAB_SHOWED',
    payload:  tabsToShow
  }
}