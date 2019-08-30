import RestModel from "discourse/models/rest";
import computed from "ember-addons/ember-computed-decorators";

export default RestModel.extend({
  @computed("count", "pm_count")
  totalCount(count, pmCount) {
    return count + pmCount;
  },

  @computed("count", "pm_count")
  pmOnly(count, pmCount) {
    return count === 0 && pmCount > 0;
  }
});
