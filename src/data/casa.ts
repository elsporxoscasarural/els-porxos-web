// Fuente única de los datos de la casa. La web lee de aquí: si cambia algo, se cambia solo aquí.
export const casa = {
	nombre: 'Els Porxos Casa Rural',
	nombreCorto: 'Els Porxos',
	capacidad: 20,
	habitaciones: 6,
	banos: 3,
	registroTuristico: 'HUTL-000401',
	direccion: {
		localidad: "Bellcaire d'Urgell",
		comarca: 'La Noguera',
		provincia: 'Lleida',
		codigoPostal: '25337',
	},
	geo: { lat: 41.7611, lng: 0.9056 },
	telefono: { visible: '620 10 45 39', enlace: '+34620104539' },
	email: 'elsporxoscasarural@gmail.com',
	whatsapp: 'https://wa.me/34620104539',
	reservas: {
		airbnb:
			'https://www.airbnb.es/rooms/877940795557551538?guests=1&adults=1&s=67&unique_share_id=29db650e-5d73-43d7-a6a1-3332a64aa6fa',
		booking: 'https://www.booking.com/Share-Bkol2V',
		vrbo: 'https://vrbo.onelink.me/ItNz/rrb8vs1n',
	},
} as const;
