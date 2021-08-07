package com.stockservice.dto.marketmovers;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Result implements Serializable {
	 private String id;
	    private String title;
	    private String description;
	    private String canonicalName;
	    private CriteriaMeta criteriaMeta;
	    private String rawCriteria;
	    private int start;
	    private int count;
	    private int total;
	    private List<Quote> quotes;
	    public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getCanonicalName() {
			return canonicalName;
		}
		public void setCanonicalName(String canonicalName) {
			this.canonicalName = canonicalName;
		}
		public CriteriaMeta getCriteriaMeta() {
			return criteriaMeta;
		}
		public void setCriteriaMeta(CriteriaMeta criteriaMeta) {
			this.criteriaMeta = criteriaMeta;
		}
		public String getRawCriteria() {
			return rawCriteria;
		}
		public void setRawCriteria(String rawCriteria) {
			this.rawCriteria = rawCriteria;
		}
		public int getStart() {
			return start;
		}
		public void setStart(int start) {
			this.start = start;
		}
		public int getCount() {
			return count;
		}
		public void setCount(int count) {
			this.count = count;
		}
		public int getTotal() {
			return total;
		}
		public void setTotal(int total) {
			this.total = total;
		}
		public List<Quote> getQuotes() {
			return quotes;
		}
		public void setQuotes(List<Quote> quotes) {
			this.quotes = quotes;
		}
		public boolean isUseRecords() {
			return useRecords;
		}
		public void setUseRecords(boolean useRecords) {
			this.useRecords = useRecords;
		}
		public boolean isPredefinedScr() {
			return predefinedScr;
		}
		public void setPredefinedScr(boolean predefinedScr) {
			this.predefinedScr = predefinedScr;
		}
		public int getVersionId() {
			return versionId;
		}
		public void setVersionId(int versionId) {
			this.versionId = versionId;
		}
		public Object getCreationDate() {
			return creationDate;
		}
		public void setCreationDate(Object creationDate) {
			this.creationDate = creationDate;
		}
		public Object getLastUpdated() {
			return lastUpdated;
		}
		public void setLastUpdated(Object lastUpdated) {
			this.lastUpdated = lastUpdated;
		}
		public boolean isPremium() {
			return isPremium;
		}
		public void setPremium(boolean isPremium) {
			this.isPremium = isPremium;
		}
		private boolean useRecords;
	    private boolean predefinedScr;
	    private int versionId;
	    private Object creationDate;
	    private Object lastUpdated;
	    private boolean isPremium;

}
