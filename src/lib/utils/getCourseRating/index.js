function getCourseRating(subscriptions = []) {
  let rating = 0;
  let count = 0;

  for (const subscription of subscriptions) {
    if (subscription.rating) {
      rating += subscription.rating;
      count += 1;
    }
  }

  rating /= count;

  return rating;
}

export default getCourseRating;
