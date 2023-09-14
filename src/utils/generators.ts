import { DSEP_SEARCH_FILTER } from "@/types/search.dto";

export const contextGenerator = (
  transactionId: string,
  action: string,
  bap_uri: string,
  bap_id: string
) => {
  return {
    transaction_id: transactionId,
    message_id: transactionId,
    action: action,
    timestamp: new Date(Date.now()),
    domain: "dsep:courses",
    country: "IND",
    city: "",
    core_version: "1.1.0",
    bap_uri: bap_uri,
    bap_id: bap_id,
  };
};

export const intentGenerator = (intentFilters: DSEP_SEARCH_FILTER) => {
  return {
    intent: {
      provider: {
        descriptor: {
          name: intentFilters.provider,
        },
      },
      item: {
        descriptor: {
          name: intentFilters.query,
        },
        price: {
          currency: "INR",
          minimum_value: intentFilters.min_price,
          maximum_value: intentFilters.max_price,
        },
        rating: intentFilters.rating ? intentFilters.rating : 0,
        tags: [
          {
            display: false,
            name: "Course Description Meta Data",
            list: [
              { name: "course_level", value: intentFilters.course_level },
              { name: "course_mode", value: intentFilters.course_mode },
              { name: "competency", value: intentFilters.competency },
              { name: "exams", value: intentFilters.exams },
              { name: "subjects", value: intentFilters.subjects },
              {
                name: "isCertified",
                value: intentFilters.isCertified === false ? "N" : "Y",
              },
              {
                name: "course_credits",
                value: intentFilters.course_credits === false ? "N" : "Y",
              },
              { name: "course_duration", value: intentFilters.course_duration },
            ],
          },
        ],
      },
      category: {
        descriptor: {
          name: intentFilters.course_category,
        },
      },
      fulfillment: {
        type: intentFilters.course_type,
        customer: {
          person: {
            contact: {
              tags: {
                email: intentFilters.seller_email,
              },
            },
          },
        },
        agent: {
          name: intentFilters.seller_name,
        },
      },
    },
  };
};
