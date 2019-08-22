package availity.homework

import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.SaveMode
import org.apache.spark.sql.functions._
import org.apache.spark.sql.expressions.Window

object CSVProcessor {
  def processCSV(sparkSession: SparkSession, inputDir: String, outputDir: String) {
    val df = sparkSession.read.option("header", true).option("inferSchema", true).csv(inputDir)

    val readyToWriteDf = df.withColumn("max_version", max("version").over(Window.partitionBy("user_id"))) //Determine max version for each user_id
    .filter(col("max_version") === col("version")) //Filter to have only the max version
    .orderBy(asc("last_name"), asc("first_name")) //sort by last and first name asc
    .drop("max_version")
    
    //write to separate cvs files for each insurance company
    readyToWriteDf.write.mode(SaveMode.Append).partitionBy("insurance_company").csv(outputDir)
  
  }
}