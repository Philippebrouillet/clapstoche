const images = import.meta.glob('$lib/images/partenaires/*.png', { eager: true });

const partners = Object.entries(images).map(([path, module]) => ({
	logo: module.default,
	alt: path.split('/').pop().replace('.png', '')
}));

export default partners;
