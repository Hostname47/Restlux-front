import React from "react";
import Star from "../../../../../../../components/icons/Star";
import StarIcon from "../../../../../../../components/icons/StarIcon";

function Stars({ count }: { count: number }) {
  return Array.from({ length: 5 }, (_, i) => (i < count ? 1 : 0)).map((v) =>
    v == 1 ? (
      <Star className="filled-star-icon" />
    ) : (
      <StarIcon className="star-icon" />
    )
  );
}

export default Stars;
