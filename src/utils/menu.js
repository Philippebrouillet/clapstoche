const menus = import.meta.glob('/src/lib/pdf/menus/*.pdf', { eager: true });
function formatMenuName(str) {
	return str.replaceAll('-', ' ').replace(/\b(?!a\b)[a-z]/g, (char) => char.toUpperCase());
}
const menusPath = Object.entries(menus)
	.map(([path, module]) => ({
		path: module.default,
		name: formatMenuName(path.split('/').pop().replace('.pdf', ''))
	}))
	.reverse();

export default menusPath;
