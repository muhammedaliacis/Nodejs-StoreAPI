import _ from 'lodash';

export const sortData = (data, sort) => {
	if (sort === "increase") {
		return (_.sortBy(data, (product) => product?.price ));
	}
	else if (sort === "decrease") {
		const sortedData = _.sortBy(data, (product) => product?.price );
		return (_.reverse(sortedData));
	}
	else
	return data
}

export const filterData = (data, filter) => {
	const filteredData = data?.filter((product) => (product?.title.toLowerCase()).indexOf(filter.toLowerCase()) !== -1);
	return filteredData

}

export const filterSpecialCategory = (data, filter) => {
	const filteredSpecialCategory = data?.filter((product) => (product?.special_category.toLowerCase()).indexOf(filter.toLowerCase()) !== -1);
	return filteredSpecialCategory

}

export const filterCategory = (data, brandFilter, categoryFilter) => {
	if (!brandFilter) {
		return data?.filter((product) => (product?.category.toLowerCase()).indexOf(categoryFilter?.toLowerCase()) !== -1);
	}
	else if (!categoryFilter ||categoryFilter === "all"){
		return data?.filter((product) => (product?.brand.toLowerCase()).indexOf(brandFilter?.toLowerCase()) !== -1);
	}
	return (data?.filter((product) => (product?.brand.toLowerCase()).indexOf(brandFilter?.toLowerCase()) !== -1 && (product?.category.toLowerCase()).indexOf(categoryFilter?.toLowerCase()) !== -1));

}

export const paginateData = (data, page, limit ) => {
	const totalPage = Math.round(data?.length / limit);
	return [{data:  data?.filter((product, index) => {
		if ((index >= (limit * (page - 1))) && (index < (limit * page))) {
			return product;
		}
	})
,  totalPage }
]
}
