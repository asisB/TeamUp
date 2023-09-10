import { API } from "aws-amplify";
import { graphqlOperation } from "@aws-amplify/api";

// GraphQl
import { getUser } from "../../src/graphql/queries";
import { createUser } from "../../src/graphql/mutations";

const APIService = {
  getUser: async (userId) => {
    try {
      const profile = await API.graphql(
        graphqlOperation(getUser, { input: userId })
      );
      const _getMeData = profile.data?.getProfile;
      return _getMeData;
    } catch (error) {
      consoleIt("Error getMe()", error);
    }
  },
  createUser: async (input) => {
    try {
      const updateRes = await API.graphql(
        graphqlOperation(createUser, { input })
      );
      return updateRes.data;
    } catch (error) {
      consoleIt("Error createUser()", error);
    }
  },
};

export default APIService;