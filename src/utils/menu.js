import food from '$lib/images/food2.png';

const menus = import.meta.glob('$lib/pdf/menus/*.pdf', { eager: true });

function formatMenuName(str) {
	return str.replaceAll('-', ' ').replace(/\b(?!a\b)[a-z]/g, (char) => char.toUpperCase());
}
const menusPath = Object.entries(menus)
	.map(([path, module]) => ({
		path: module.default,
		name: formatMenuName(path.split('/').pop().replace('.pdf', '')),
		description: 'bla',
		menus: [
			{
				logo: food,
				meals: {
					entree: 'Terrine de volaille',
					plat: "Jarret de boeuf sauce à l'oignon et petits pois",
					laitage: "Fourme d'ambert",
					dessert: ''
				},
				date: undefined
			},
			{
				logo: food,
				meals: {
					entree: 'Terrine de volaille',
					plat: "Jarret de boeuf sauce à l'oignon et petits pois",
					laitage: "Fourme d'ambert",
					dessert: ''
				},
				date: undefined
			}
		]
	}))
	.reverse();

export default menusPath;
