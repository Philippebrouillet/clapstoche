const menus = import.meta.glob('/src/lib/pdf/menus/*.pdf', { eager: true });

const menusPath = Object.entries(menus).map(([path, module]) => ({
	path: module.default,
	name: path.split('/').pop().replace('.pdf', '')
}));

export default menusPath;
