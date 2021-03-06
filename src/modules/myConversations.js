/**
 * Utilities for showing agent level interaction and evaluation details
 *
 * @module modules/myConversations
 *
 * @since 1.3.0
 */
import BaseApi from './base';

/**
 * Utilities for showing agent level interaction and evaluation details
 *
 * @extends module:modules/base~BaseApi
 *
 * @since 1.3.0
 */

class MyConversationsApi extends BaseApi {
    /**
     * Show an agent his/her interaction by ID.
     *
     * Required Permissions:
     * * ALL Of
     *     * User must be an Agent participant on the conversation
     *     * ONE Of
     *         * Implicit Conversation Access via participant on the Conversation
     *         * conversation:communication:view
     *
     * @param {String} conversationId
     *
     * @example
     * myClientApp.myConversations.showInteractionDetails(
     *   'B1B0B92B-B944-4F5D-AF62-8E5BAFFC9298',
     * );
     *
     * @since 1.3.0
     */

    showInteractionDetails(conversationId) {
        super.sendMsgToPc('showMyInteractionDetails', {
            'conversationId': conversationId
        });
    }

    /**
     * Show an agent his/her evaluation details by conversation and evaluation IDs.
     *
     * Required Permissions:
     * * ALL Of
     *     * User must be the Agent evaluated on the specified conversation/evaluation
     *     * quality:evaluation:view
     *
     * @param {String} conversationId
     * @param {String} evaluationId
     *
     * @example
     * myClientApp.myConversations.showEvaluationDetails(
     *   'B1B0B92B-B944-4F5D-AF62-8E5BAFFC9298',
     *   '0E3759CE-2275-4480-BB15-3D4717446F93',
     * );
     *
     * @since 1.3.0
     */
    showEvaluationDetails(conversationId, evaluationId) {
        super.sendMsgToPc('showMyEvaluationDetails', {
            'conversationId': conversationId,
            'evaluationId': evaluationId
        });
    }
}

export default MyConversationsApi;
