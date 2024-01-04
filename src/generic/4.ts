
interface PageProps {
  title: string;
}

class Component<T> {
  constructor (public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
