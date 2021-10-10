export async function bootstrap() {
  console.info("init sub app1");
}

export async function mount(props) {
  props.container.innerHTML = `<h2>sub app1</h2>`;
}

export async function unmount(props) {
  //
}

export async function update(props) {
  // console.log('update props', props);
}
