export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const renderComponent = (container, component, place = `beforeend`) => {
  container.insertAdjacentHTML(place, component);
};
