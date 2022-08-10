interface Link {
  name: string;
  link: string;
}

export const links: { [k: string]: Link } = {home: {link: '/', name: 'Home'}};

export const menus: { name: string; link: string }[] = Object.values(links);

export default links;
