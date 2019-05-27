const apiKey = 'R70hs7xjIf7Rmt6hH5C8SsbvPW9Y2LKqyxVto_obascci1QIjXDCxE_YEh4vOhWeSyV42JmpRMdDB6vcdmsN-wwrJflOuOu6fa1LKNU_A6eGam_aK9EVEG9GkM7WXHYx';

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => response.json()).then(({ businesses }) => {
      if (businesses) {
        return businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipCode,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        })
      };
    })
  }
}
