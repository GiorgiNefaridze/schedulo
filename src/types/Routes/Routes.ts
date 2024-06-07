type paths = 'Events' | 'Calendar';

type Routes = {
  path: paths;
  component: () => JSX.Element;
  icon: string;
};

export {type Routes};
