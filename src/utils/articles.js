const images = import.meta.glob('$lib/images/articles/*.png', { eager: true });
const articlesimagess = Object.entries(images).map(([path, module]) => ({
	imagePath: module.default,
	alt: path.split('/').pop().replace('.png', '')
}));

const formatUrl = (imgName) => {
	const path = articlesimagess.find((image) => imgName === image.alt);
	return path?.imagePath;
};
const articles = [
	{
		title: "Comment bénéficier de l'avance immédiate Crédit d'impôt avec Clapstoche ?",
		date: 'mardi 20 juin 2023',
		litleContent:
			"Depuis plusieurs mois, Claspstoche a mis en place l'Avance Immédiate du Crédit d'Impôt (AICI) pour ses clients. Voici comment fonctionne ce service qu...",
		content: `
                <p class="mb-4">Depuis plusieurs mois, Clapstoche a mis en place l'Avance Immédiate du Crédit d'Impôt (AICI) pour ses clients. Voici comment fonctionne ce service qui vous permet de déduire 50% des frais du service à domicile.</p>
                <p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">Le montant de cette aide est plafonné à 6 000 euros par an et par foyer fiscal.</p>
                <p class="mb-4">Jusqu'à présent, les personnes ayant recours à un service à la personne devaient avancer les frais puis demander un remboursement l'année suivante aux services d’impôts en présentant une attestation fiscale. Avec l’avance immédiate du crédit d'impôt, vous bénéficiez immédiatement de l'aide et ne payez que le reste à charge !</p>
                <h3 class="font-semibold text-lg mt-6 mb-2">Comment faire pour bénéficier de l'avance immédiate crédit d'impôt ?</h3>
                <p class="mb-4">Clapstoche, spécialisé dans le Service à la Personne depuis 20 ans, crée votre compte, avec votre autorisation. Vous recevrez ensuite une notification de l'Urssaf vous invitant à activer votre compte sur le site <a target="_blank" href="https://www.particulier.urssaf.fr" class='text-blue-800 underline'>www.particulier.urssaf.fr</a>. Et c'est parti?! L'Avance immédiate sera alors directement déduite pour toutes les prestations réalisées à votre domicile. À noter que ce service peut aussi vous servir pour tout prestataire agréé (aides soignantes, aides ménagères, etc.).</p>
                <h3 class="font-semibold text-lg mt-6 mb-2">Comment gérer les factures avec l'Avance Immédiate ?</h3>
                <p class="mb-4">Rien de plus simple : une demande de paiement sera effectuée chaque mois sur le site de l'Urssaf par l'entreprise, (l'avance immédiate sera bien déduite de la facture). Après avoir reçu un mail, vous pourrez vérifier la facture déjà pré-remplie sur le site. Sans action de votre part sous 48h, la facture sera automatiquement réglée à l’Urssaf par prélèvement. L'Urssaf prélève alors le montant de votre reste à charge et reverse à la société la totalité de la prestation. Vous n'avez donc plus besoin d'avancer les frais !</p>
                <p class="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4 mb-4">N'hésitez pas à contacter les équipes Clapstoche au <a href="tel:0145189398" class='text-blue-800 underline'>01 45 18 93 98</a> pour toutes questions relatives à ce nouveau service.</p>
            `,
		image: formatUrl('crédit')
	},
	{
		title: 'Journée nationale des aides à domicile',
		date: 'mercredi 15 mars 2023',
		litleContent:
			'Ce 17 mars, c’est la première journée nationale des aides à domicile, qui se mobilisent pour accompagner les personnes âgées ou en situation de handic...',
		content: `
		<p class="mb-4">Ce 17 mars, c’est la première journée nationale des aides à domicile, qui se mobilisent pour accompagner les personnes âgées ou en situation de handicap, ainsi que les personnes en perte d’autonomie, qui ont besoin d’une aide au quotidien pour pouvoir rester à domicile. Cette journée a été créée par le ministère des Solidarités, de l’Autonomie et des Personnes handicapées, en concertation avec l’ensemble des fédérations du secteur, afin de les remercier pour leur engagement et reconnaître la place essentielle qu’ils tiennent dans notre société. Pour la première fois, cette journée nationale des aidants a lieu ce vendredi 17 mars 2023.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Le rôle de Clapstoche</h3>
		<p class="mb-4">La société Clapstoche apporte son aide au quotidien en livrant des repas équilibrés et adaptés aux personnes en perte d’autonomie (ponctuelle ou permanente), mais aussi aux personnes en situation de handicap, ou malades. Nos livreurs contribuent ainsi au maintien à domicile de nos clients en apportant leur aide et leur assistance en cas de besoin.</p>
		<p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">Ensemble, nous reconnaissons et célébrons l'importance des aides à domicile pour leur dévouement et leur impact positif sur la société.</p>
	`,
		image: formatUrl('nationalDay')
	},
	{
		title: "Déduction fiscale et crédit d'impôt",
		date: 'mardi 10 janvier 2023',
		litleContent:
			'Depuis le 1er janvier 2017, L’article 82 de la Loi de Finances 2017 ouvre droit au crédit d’impôt à tous les particuliers qui font appel à une structu...',
		content: `
		<p class="mb-4">Depuis le 1er janvier 2017, l’article 82 de la Loi de Finances 2017 ouvre droit au crédit d’impôt à tous les particuliers qui font appel à une structure de services à la personne, ou à l’emploi direct d’un salarié à domicile. En effet, les personnes retraitées, mais aussi toutes les personnes non imposables ont la possibilité d’être remboursées à hauteur de 50% (sur la partie services) des sommes engagées pour des prestations de services à la personne.</p>
		<p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">Chaque repas livré par Clapstoche ouvre droit à un crédit d’impôt de 50% des frais de livraison.</p>
		<p class="mb-4">Cet avantage est plafonné à 12 000 euros par an. Cet avantage concerne toutes les prestations de services à la personne réalisées par des associations, sociétés prestataires, sociétés mandataires, mais aussi l’emploi direct d’un salarié à domicile.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">A combien d’euros les repas reviennent-ils ?</h3>
		<p class="mb-4">Exemple : une personne retraitée fait appel à Clapstoche pour un portage de repas 100 jours durant l’année 2022.</p>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Si elle est imposable, elle bénéficiera d’une réduction d’impôts de 470 euros.</li>
			<li class="mb-2">Si elle n’est pas imposable, elle recevra 470 euros au titre du crédit d’impôt, correspondant à 4,70 euros par repas livré au cours de l’année.</li>
		</ul>
		<p class="mb-4">Selon nos formules, le menu « mini » par exemple revient à 9,85 euros au lieu de 15,05 euros après crédit d’impôts.</p>
		<a href="/tarifs" class="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">Voir nos tarifs</a>
	`,
		image: formatUrl('déduction')
	},
	{
		title: 'La société Clapstoche vous souhaite un joyeux noël',
		date: 'dimanche 25 décembre 2023',
		litleContent:
			'Nous vous souhaitons à toutes et à tous un très joyeux Noël, entourés de votre famille et de vos proches. Notre équipe vous souhaite de belles fête...',
		content:
			'Nous vous souhaitons à toutes et à tous un très joyeux Noël, entourés de votre famille et de vos proches. Notre équipe vous souhaite de belles fête',
		image: formatUrl('noel')
	},
	{
		title: 'Journée mondiale d’Alzheimer',
		date: 'mardi 13 septembre 2022',
		litleContent:
			'En 2023, la journée mondiale d’Alzheimer aura lieu le jeudi 21 septembre. Cette maladie neurodégénérative touche chaque année de plus en plus de perso...',
		content: `
		<p class="mb-4">En 2023, la journée mondiale d’Alzheimer aura lieu le jeudi 21 septembre. Cette maladie neurodégénérative touche chaque année de plus en plus de personnes âgées qu’il faut accompagner au quotidien. En perte de mémoire et d’autonomie, des solutions existent pour leur permettre de vivre chez eux, à domicile. Voici le témoignage de l’une de nos clientes, Marie :</p>
		<blockquote class="bg-gray-100 border-l-4 border-gray-400 text-gray-700 p-4 mb-4">
			<p>« Ma mère voulait absolument rester chez elle. Mais sa perte de mémoire l’empêchait de se faire elle-même à manger. Il arrivait parfois de retrouver le beurre dans un tiroir et je craignais qu’elle ne réchauffe un plat dans un aluminium au micro-ondes par exemple. Avec la maladie d’Alzheimer, les petits gestes du quotidien deviennent vite un réel danger. Nous avons alors fait appel à Clapstoche pour la livraison de ses repas, et les livreurs prenaient même le temps de vérifier les produits placés au frigo, qu’elle oubliait souvent de consommer ». - Marie</p>
		</blockquote>
		<h3 class="font-semibold text-lg mt-6 mb-2">Prendre soin de nos aînés</h3>
		<p class="mb-4">La journée d’Alzheimer est l’occasion de prendre soin de nos aînés, et de se pencher sur les signes qui permettent de dépister la maladie. N’hésitez pas à stimuler la mémoire par des jeux, des discussions, des souvenirs photos et maintenez des activités en famille, avec les enfants et les petits-enfants par exemple.</p>
	`,
		image: formatUrl('alzheimer')
	},
	{
		title: 'Carte mobilité inclusion (CMI) : comment en bénéficier ?',
		date: 'jeudi 20 février 2020',
		litleContent:
			'La carte mobilité inclusion a pour but d’attester que vous êtes en situation de handicap. Elle est accordée sous conditions et permet de bénéficier de...',
		content: `
		<p class="mb-4">La carte mobilité inclusion a pour but d’attester que vous êtes en situation de handicap. Elle est accordée sous conditions et permet de bénéficier de certains droits notamment dans les transports.</p>
		<p class="mb-4">La loi n°2016-1321 du 7 octobre 2016 « Pour une République numérique », article 107/ décret n° 2016-1849 du 23 décembre 2016 est entrée en vigueur depuis le 1er janvier 2017.</p>
		<p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">La « carte mobilité inclusion » remplace les cartes de priorité, d’invalidité et de stationnement. La CMI n’est pas délivrée aux invalides de guerre qui conservent le bénéfice de la carte de stationnement.</p>
		<p class="mb-4">Cette carte est attribuée en fonction du degré de mobilité du demandeur. Ce degré est évalué par la Commission des Droits et de l’Autonomie des Personnes Handicapées (CDAPH) soit de manière définitive, soit pour une durée comprise entre 1 et 20 ans.</p>

		<h3 class="font-semibold text-lg mt-6 mb-2">Mention « invalidité »</h3>
		<p class="mb-4">Cette mention vous octroie une priorité d’accès aux places assises dans les transports en commun, les espaces et salles d’attente et tout établissement accueillant du public. Ce droit de priorité concerne aussi la personne qui vous accompagne dans vos déplacements.</p>
		
		<h3 class="font-semibold text-lg mt-6 mb-2">Autres avantages</h3>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Avantages fiscaux, pour vous-même ou vos proches</li>
			<li class="mb-2">Avantages commerciaux accordés, sous certaines conditions, par exemple dans les transports (RATP, SNCF, Air France)</li>
		</ul>
		<p class="mb-4"><strong>Conditions :</strong> Elle vous est attribuée si :</p>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">vous avez un taux d’incapacité permanente d’au moins 80 %</li>
			<li class="mb-2">vous êtes invalide de 3ème catégorie</li>
		</ul>

		<h3 class="font-semibold text-lg mt-6 mb-2">Mention « priorité pour personnes handicapées »</h3>
		<p class="mb-4">Cette mention permet d’obtenir une priorité d’accès aux places assises dans les transports en commun, dans les espaces et salles d’attente ainsi que dans les établissements et les manifestations accueillant du public. Elle permet également d’obtenir une priorité dans les files d’attente.</p>
		<p class="mb-4"><strong>Conditions :</strong> Elle vous est attribuée si vous êtes atteint d’une incapacité inférieure à 80 % rendant la station debout pénible.</p>

		<h3 class="font-semibold text-lg mt-6 mb-2">Mention « stationnement pour personnes handicapées »</h3>
		<p class="mb-4">Cette mention permet d’utiliser gratuitement et sans limitation de durée, toutes les places de stationnement ouvertes au public. Elle concerne également la tierce personne qui vous accompagne. La durée de stationnement peut toutefois être limitée à 12 heures sur décision de la commune.</p>
		<p class="mb-4"><strong>Conditions :</strong> Elle vous est attribuée si vous êtes atteint d’un handicap :</p>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">qui réduit de manière importante et durable votre capacité et votre autonomie de déplacement à pied</li>
			<li class="mb-2">ou impose que vous soyez accompagné par une tierce personne dans vos déplacements.</li>
		</ul>

		<h3 class="font-semibold text-lg mt-6 mb-2">Démarche</h3>
		<p class="mb-4">Pour faire la demande de CMI, il faut s’adresser à la MDPH de votre département en fournissant :</p>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Un formulaire (disponible ici) dûment complété et accompagné d’un certificat médical datant de moins de 3 mois</li>
			<li class="mb-2">si vous demandez la CMI avec mention « invalidité », fournir un justificatif attestant que vous percevez une pension d’invalidité de 3e catégorie</li>
			<li class="mb-2">une photocopie d’une pièce d’identité</li>
		</ul>
		<p class="mb-4">Une demande dématérialisée est également prévue par la loi mais non encore disponible.</p>
		<p class="mb-4">Les bénéficiaires de l’APA peuvent faire la demande de la CMI en même temps que leur demande initiale, ou lors du renouvellement. L’évaluation sera alors réalisée par l’équipe médico-sociale de l’APA.</p>
		<p class="mb-4">La carte mobilité inclusion mention invalidité et stationnement sera attribuée de façon définitive aux personnes relevant des GIR 1 et 2.</p>
		<p class="mb-4">La demande de carte donne lieu à une évaluation par l’équipe pluridisciplinaire qui peut, dans le cadre de l’instruction, vous convoquer pour évaluer votre capacité de déplacement.</p>
		<p class="mb-4">La CMI est accordée pour une durée variant de 1 à 20 ans selon votre état de dépendance. Toutefois, la CMI portant la mention invalidité et stationnement est accordée définitivement si vous percevez l’APA et que votre degré d’autonomie est classé dans les groupes 1 ou 2.</p>
	`,
		image: formatUrl('handicap')
	},
	{
		title: 'Qui fait quoi pour les séniors ?',
		date: 'mercredi 28 août 2019',
		litleContent:
			'Le 11 avril dernier, le Comité de Pilotage du Réseau Partenarial pour les Séniors a organisé cette  Journée autour du thème « Qui fait quoi pour les S...',
		content: `
		<p class="mb-4">Le 11 avril dernier, le Comité de Pilotage du Réseau Partenarial pour les Séniors a organisé cette journée autour du thème « Qui fait quoi pour les Seniors ».</p>
		<p class="mb-4">Clapstoche a activement participé à cette manifestation qui a rassemblé près de 150 personnes du champ social, médicosocial et sanitaire.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Points clés abordés</h3>
		<p class="mb-4">Face aux missions qui sont confiées aux différents prestataires, et compte tenu de la spécificité des interventions de chacun à gérer le sujet sensible de la dépendance, plusieurs points ont été mis en évidence au cours des tables rondes et de la représentation du théâtre forum :</p>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Les enjeux majeurs des prises en charge</li>
			<li class="mb-2">Le temps : composante incontournable de la qualité des prestations et de la gestion des urgences</li>
			<li class="mb-2">Le sentiment d’isolement des intervenants</li>
		</ul>
		<p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">Des pistes de réflexion ont émergé au fil des interventions qui toutes convergent vers la nécessité pour les différents prestataires de mieux se connaître pour mieux se coordonner, communiquer, et de faire réseau… encore et encore.</p>
	`,
		image: formatUrl('senior')
	},
	{
		title: 'Alerte canicule',
		date: 'jeudi 27 juin 2019',
		litleContent:
			'En cas de canicule et de fortes chaleur, les personnes âgées sont particulièrement à risque. Pour prévenir les dangers, il est recommandé de bien s’al...',
		content: `
		<p class="mb-4">En cas de canicule et de fortes chaleurs, les personnes âgées sont particulièrement à risque. Pour prévenir les dangers, il est recommandé de bien s’alimenter, s’hydrater régulièrement, se rafraîchir et aérer la pièce. Evitez de sortir aux heures les plus chaudes de la journée, buvez au moins 1,5 litre d’eau par jour, sans attendre d’avoir soif et évitez l’alcool. Voici les bons réflexes à avoir en matière d’hydratation et d’alimentation :</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Bons réflexes en matière d’hydratation et d’alimentation</h3>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Privilégiez une alimentation riche en eau : fruits, légumes, laitages, glaces</li>
			<li class="mb-2">Privilégiez des repas froids, sous forme de salades</li>
			<li class="mb-2">Buvez 2 litres d’eau par jour</li>
		</ul>
		<p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">Nous vous rappelons que vous trouverez ces différents composants dans les propositions de menus hebdomadaires, ainsi que chaque jour dans la carte de remplacement.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">CLAPSTOCHE VOUS PROPOSE</h3>
		<p class="mb-4">Un exemple de menu choisi en carte de remplacement :</p>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Melon ou gaspacho de tomates</li>
			<li class="mb-2">Aiguillettes de poulet sauce Tartare & Salade de pâtes à l’Italienne (ou l’une de nos salades composées)</li>
			<li class="mb-2">Yaourt nature ou Fromage blanc</li>
			<li class="mb-2">Brunoise de fruits ou Nectarine</li>
		</ul>
		<p class="mb-4">N’hésitez pas à nous appeler pour toute question.</p>
	`,
		image: formatUrl('canicul')
	},
	{
		title: '6ème édition des Assises des Seniors',
		date: 'mardi 22 janvier 2019',
		litleContent:
			'Pour cette 6ème édition des Assises des Seniors, qui se tiendront du 6 février au 4 avril 2019, plusieurs thématiques vous seront proposées dans le ca...',
		content: `
		<p class="mb-4">Pour cette 6ème édition des Assises des Seniors, qui se tiendront du 6 février au 4 avril 2019, plusieurs thématiques vous seront proposées dans le cadre d’une action de prévention et de sensibilisation.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Ne manquez pas ce rendez-vous !</h3>
		<p class="mb-4">Conférences, ateliers, forums… De nombreuses activités et discussions enrichissantes vous attendent lors de cet événement incontournable.</p>
	`,
		image: formatUrl('assises')
	},
	{
		title: 'Nouvelle radio interactive Alzheimer',
		date: 'mardi 18 décembre 2018',
		litleContent:
			'Alzheimer, la radio, c’est le nom de la nouvelle radio interactive lancée par France Alzheimer et maladies apparentées. Au programme de ce média inédi...',
		content: `
		<p class="mb-4">Alzheimer, la radio, c’est le nom de la nouvelle radio interactive lancée par France Alzheimer et maladies apparentées. Au programme de ce média inédit à destination des familles, des personnes malades et des professionnels du soin : des points de vue d’experts, des conseils pratiques, des témoignages de proches aidants…</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Émission Vos questions/nos réponses</h3>
		<p class="mb-4">Vous pourrez écouter et participer à l’émission <strong>Vos questions/nos réponses</strong> qui vous donne la parole ! Tous les 15 jours, deux témoins sont reçus pour évoquer les différentes problématiques liées à la maladie d’Alzheimer. Questions, réactions, coups de gueule, témoignages… Chacun peut apporter sa contribution.</p>
		<p class="mb-4">Pour laisser vos messages, un numéro : <a href="tel:0972190423" class="text-blue-800 underline">09 72 19 04 23</a> ou écrire un commentaire sur le site de la webradio.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Thèmes prochainement traités</h3>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">“Doit-on mentir à la personne malade?”</li>
			<li class="mb-2">“La place des médicaments”</li>
		</ul>
		<p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">Des sujets qui concernent bon nombre de personnes et sur lesquels vous êtes invités à communiquer.</p>
		<p class="mb-4">Pour écouter Alzheimer, la radio rendez-vous sur <a href="https://radiofrancealzheimer.org" target="_blank" class="text-blue-800 underline">radiofrancealzheimer.org</a> ou, depuis votre mobile, en téléchargeant l’application à partir de Google Store et App Store.</p>
	`,
		image: formatUrl('laradio')
	},
	{
		title: '4ème édition du Salon des aidants',
		date: 'lundi 08 octobre 2018',
		litleContent:
			'Vous êtes aidant familial ? Vous faites partie des soutiens essentiels des personnes âgées ou en perte d’autonomie, ou en situation de handicap ? ...',
		content: `
		<p class="mb-4">Vous êtes aidant familial ? Vous faites partie des soutiens essentiels des personnes âgées ou en perte d’autonomie, ou en situation de handicap ?</p>
		<p class="mb-4">1 personne sur 6 est un aidant familial souvent elle-même en situation d’isolement et de grand épuisement, ignorant parfois les aides et services qui peuvent exister pour la soulager.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Rejoignez-nous à la 4ème édition du Salon des aidants</h3>
		<p class="mb-4"><strong>Entrée libre et gratuite</strong><br>le vendredi 19 octobre 2018 de 9h à 17h30<br>Maison des arts et de la culture<br>1 place Salvador-Allende – 94000 Créteil<br>(métro Créteil-Préfecture – ligne 8)</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Au programme :</h3>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Stands associatifs et institutionnels</li>
			<li class="mb-2">Groupes d’échanges</li>
			<li class="mb-2">Tables rondes</li>
			<li class="mb-2">Ateliers…</li>
		</ul>
		<p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">L’objectif de ce forum est de réunir toutes les structures pouvant apporter aides, soutiens et services. Plus de 50 exposants vous attendent, aux côtés des services du Département et de la MDPH.</p>
		<p class="mb-4"><strong>Ne manquez pas ce Rendez-vous !</strong></p>
	`,
		image: formatUrl('salonAidants')
	},
	{
		title: 'Avancer en âge sans renoncer au voyage',
		date: 'jeudi 20 juillet 2017',
		litleContent:
			'TRAVEL AGE vous accueille dans des groupes de personnes âgées pouvant présenter une mobilité réduite. L’organisation des journées et des visites touri...',
		content: `
		<p class="mb-4">TRAVEL AGE vous accueille dans des groupes de personnes âgées pouvant présenter une mobilité réduite. L’organisation des journées et des visites touristiques se fait à un rythme doux avec des accompagnateurs expérimentés et une infirmière pour d’éventuels besoins de soin ou d’hygiène.</p>
		<p class="mb-4">Les personnes âgées qui voyagent avec TRAVEL AGE apprécient la variété et la qualité des visites, le confort des hôtels-restaurants, l’accessibilité des lieux de visite sélectionnés avec soin, la petite taille des groupes et la présence attentive des accompagnateurs.</p>
		
		<h3 class="font-semibold text-lg mt-6 mb-2">Dates de séjour 2017</h3>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Saint Jean de Luz du 5 au 12 avril</li>
			<li class="mb-2">Colmar du 14 au 21 juin</li>
			<li class="mb-2">La Rochelle du 2 au 9 août</li>
			<li class="mb-2">Aix les Bains du 30 août au 6 septembre</li>
			<li class="mb-2">Carnac du 20 au 27 septembre</li>
			<li class="mb-2">Juan les Pins du 18 au 25 octobre</li>
		</ul>

		<p class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4">Programmes et Photos de séjours accessibles sur <a href="http://www.travel-age.com" target="_blank" class="text-blue-800 underline">www.travel-age.com</a></p>
		
		<p class="mb-4"><strong>Contact :</strong> <a href="tel:0616565034" class="text-blue-800 underline">06 16 56 50 34</a></p>
	`,
		image: formatUrl('voyage')
	},
	{
		title: '15 juin - Journée mondiale contre la maltraitance des personnes âgées',
		date: 'jeudi 01 juin 2017',
		litleContent:
			'12ème édition de la journée mondiale contre la maltraitance des personnes âgées L’ONU a déclaré le 15 juin journée de sensibilisation à la maltrait...',
		content: `
		<p class="mb-4">12ème édition de la journée mondiale contre la maltraitance des personnes âgées</p>
		<p class="mb-4">L’ONU a déclaré le 15 juin journée de sensibilisation à la maltraitance des personnes âgées. Il représente le seul jour de l’année où le monde entier exprime son opposition à l’abus et aux souffrances infligées aux générations plus âgées. La maltraitance risque de s’accroître en raison du vieillissement de la population mondiale.</p>
		<blockquote class="bg-gray-100 border-l-4 border-gray-400 text-gray-700 p-4 mb-4">
			<p>« La maltraitance des personnes âgées, ce crime odieux, survient souvent dans le secret des espaces privés, ce qui rend encore plus nécessaire sa dénonciation publique dans les termes les plus forts. »</p>
			<footer class="text-right">- Ban Ki-moon, ex-Secrétaire Général des Nations unies</footer>
		</blockquote>
		<p class="mb-4">L’OMS (Organisation Mondiale de la Santé) estime qu’1 personne âgée sur 10 est confrontée chaque mois à la maltraitance, alors que seulement 4% des cas sont signalés. Cette lacune est due en grande partie à la crainte ressentie par les séniors qui préfèrent garder le silence.</p>
		<p class="mb-4">Qu’elle soit familiale ou institutionnelle, et parce qu’elle se révèle rarement, la maltraitance des personnes âgées reste difficile à appréhender, tant par son ampleur que par la nature des violences qui la caractérisent. Elle renvoie à une grande diversité de situations (abus financiers, violences psychologiques, physiques ou sexuelles) allant de la négligence à la violence active. Or, la maltraitance peut entraîner de graves traumatismes physiques et avoir des conséquences psychologiques à long terme.</p>
		<p class="mb-4">Il ne faut pas négliger la maltraitance « passive », induite par un défaut de moyens humains ou financiers notamment dans les institutions de prise en charge des personnes âgées (EHPAD, Hôpitaux…). La mobilisation autour de cette problématique est d’autant plus vive que les contraintes budgétaires risquent de se heurter au vieillissement rapide de la population à l’échelle mondiale.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">En France</h3>
		<p class="mb-4">La Loi d’Adaptation de la société au Vieillissement contient plusieurs articles visant à protéger les droits des personnes âgées dans différentes situations :</p>
		<ul class="list-disc list-inside mb-4">
			<li class="mb-2">Hébergement</li>
			<li class="mb-2">Accompagnement par des établissements ou services sociaux et médico-sociaux avec la désignation d’une personne de confiance</li>
			<li class="mb-2">Protection juridique des majeurs simplifiée et renforcée</li>
			<li class="mb-2">Plus généralement, toutes les mesures de protection des personnes handicapées et des personnes âgées eu égard à la maltraitance financière. Notamment l’interdiction de recevoir de l’argent ou des biens, est étendue, en particulier aux bénévoles et à certains intervenants à domicile.</li>
		</ul>
		<p class="mb-4">Enfin, la loi instaure une obligation de signalement (aux autorités administratives, aux services de police ou de justice) des situations de maltraitance, et l’applique à l’ensemble des établissements, services sociaux et médico-sociaux ainsi qu’aux lieux de vie et d’accueil.</p>
		<h3 class="font-semibold text-lg mt-6 mb-2">Chacun peut être confronté à la maltraitance active ou passive</h3>
		<p class="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 mb-4"><strong>TOUS VIGILANTS !!</strong></p>
		<p class="mb-4"><strong>L’accès pour tous au 3977</strong></p>
		<p class="mb-4">Un service permettant aux particuliers comme aux professionnels de signaler toute situation de maltraitance, et facilite l’expression des personnes ou de leur entourage.</p>
	`,
		image: formatUrl('maltraitance')
	}
];

export default articles;
